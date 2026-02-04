import { useEffect, useState, useRef } from "react"
import Keyboard from "./keyboard"
import { preferences } from "@/storage/preferences"
import { MessageType } from "@/types"

const KeyboardWrapper = ({ initialPrefs }: any) => {
  const initialPos = initialPrefs.position ?? { x: 0, y: 0 }

  const [prefs, setPrefs] = useState(initialPrefs)
  const [ready, setReady] = useState(false)
  const [pos, setPos] = useState(initialPos)
  const [isMac, setIsMac] = useState(false)

  const posRef = useRef(initialPos)
  const dragging = useRef<boolean>(false)
  const didDrag = useRef<boolean>(false)
  const saveTimeout = useRef<number | null>(null)
  const dragStart = useRef({ mouseX: 0, mouseY: 0, x: 0, y: 0 })

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('mac') || platform.includes('iphone') || platform.includes('ipad')) {
      setIsMac(true)
    } else {
      setIsMac(false)
    }
  }, [])

  useEffect(() => {
    if (!prefs?.position) return
    setPos(prefs.position)
  }, [prefs.position])

  useEffect(() => {
    posRef.current = pos
  }, [pos])

  useEffect(() => {
    let mounted = true

    preferences.getValue().then(value => {
      if (!mounted) false
      setPrefs(value ?? preferences.fallback)
      setReady(true)
    })

     const unwatch = preferences.watch((newValue) => {
      if (!mounted) return
      setPrefs(newValue ?? preferences.fallback)
    })

    return () => {
      mounted = false
      unwatch()
    }
  }, [])

  const onDragStart = (e) => {
    dragging.current = true
    didDrag.current = false
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: pos.x,
      y: pos.y
    }

    e.preventDefault()
  }

  const onDragMove = (e) => {
    if (!dragging.current) return 

    didDrag.current = true
    const deltaX = e.clientX - dragStart.current.mouseX
    const deltaY = e.clientY - dragStart.current.mouseY

    setPos({
      x: dragStart.current.x + deltaX,
      y: dragStart.current.y + deltaY,
    })
  }

  const onDragEnd = () => {
    if (!dragging.current) return
    dragging.current = false

    if (!didDrag.current) return

    if (saveTimeout.current) 
      clearTimeout(saveTimeout.current)

    saveTimeout.current = window.setTimeout(() => {
      browser.runtime.sendMessage({ type: MessageType.SAVE_POSITION, payload: { position: posRef.current } })
    }, 300)
  }
  
  useEffect(() => {
    window.addEventListener("mousemove", onDragMove)
    window.addEventListener("mouseup", onDragEnd)
    return () => {
      window.removeEventListener("mousemove", onDragMove)
      window.removeEventListener("mouseup", onDragEnd)
    }
  }, [])

  if (!ready) return null

  return (
    <div 
      style={{ 
        zIndex: 9999,
        position: 'fixed',
        top: 10, 
        left: 10, 
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    >
      <Keyboard 
        {...prefs} 
        didDrag={didDrag}
        isMac={isMac}
        dragHandlerProps={{ onMouseDown: onDragStart }}
      />
    </div>
  )
}

export default KeyboardWrapper