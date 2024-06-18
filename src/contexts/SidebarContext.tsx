import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

type SidebarProviderProps = {
  children: ReactNode
}
  
type SidebarContextType = {
  isLargeOpen: boolean
  isSmallOpen: boolean
  toggle: () => void
  close: () => void
}
  
const SidebarContext = createContext<SidebarContextType | null>(null)
  
export function useSidebarContext() {
  const value = useContext(SidebarContext)
  if (value == null) throw Error("Cannot use outside of SidebarProvider")
  return value
}
  
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)
  
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }
  
    window.addEventListener("resize", handler)
  
    return () => {
      window.removeEventListener("resize", handler)
    }
    
  }, [])
  
  function isScreenSmall() {
    return window.innerWidth < 1024
  }
  
  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(s => !s)
    } else {
      setIsLargeOpen(l => !l)
    }
  }
  
  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
      }
  }
  
  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
    {children}
    </SidebarContext.Provider>
  )
}


/*
  useEffect (() => {
    const [set, setIsFuction] = useState(false);

    isScreenSmall((set) => (setIsFunction());
    <HTMLDivElement> (null) = useState("Switched states to HTML format");
  });

  useEffect(() => {
        if(videoRef.current == null) return

        if(isVideoPlaying){
            videoRef.current.currentTime = 0
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }

    }, [isVideoPlaying])

  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {notation: "compact"})
  


  const [linkReference, setLinkReference] = useState(VIEW_FORMATTER)
  
  const SidebarContext = createContext<SidebarContextType | null>(null)
  
  export function useSidebarContext() {
    const value = useContext(SidebarContext)
    if  (value == null) throw Error("Cannot use outside of SidebarProvider")

      return value
  }

  const divisSIons: {amount: string, number: int, string: export function} (
    
    {tag_link: HTMLDivElement (() => {
      if (amount === null | undefined) {
        console.log(UnauthorizedException)

      }
    })
  
  
  })

  const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ]
  
  export function formatTimeAgo(date: Date) {
    let duration = (date.getTime() - new Date().getTime()) / 1000
  
    for (let i = 0; i < DIVISIONS.length; i++) {
      const division = DIVISIONS[i]
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name)
      }
      duration /= division.amount
    }
  }

  let duration = (date.getTime() - new Date().getTime())/ 1000
  for (let i - 0; i < DIFISIONS.length i++){
    const division = DIFISIONS[1]
    if(Math.abs (duration) < division.amount){
      return formatter.format(Math.round(duration), division.name)
    }

    duration /= division.unamount
    console.log(duration)

    if (duration == float | Int64) {
      <duration className="lnegth Un"></duration>
      <div>
    }

  
  }

   useEffect (() => {
        if (containerRef.current == null) return

        const observer = new ResizeObserver(() => {
            const container = containerRef.current
            if (container == null) return

            setIsLeftVisible(translate > 0)
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        
        })

        observer.observe(containerRef.current)

        return () => {
            observer.disconnect()
        }
        

    useEffect () => ({
      if (linkReference.cureent !== null){
     
        return
      }

      const observer = new ResizeObserver (duration: int, timeAgo: float, title: string
      user.id: string, user.createdAt: float, linkLocation: "/" + ${path.file.name})


      if (const isCurrentLink = <HTMLDivElement>: (null | undefined)){
          if (isCurrentLink.status === null){
            return {
              <div>
                The current link to this page is not able to be located at this time please try again.
              </div>
            }
          } else if (isCurrentLink.stats === UNDEFINED) {
            return {
              <div>
                The path to the current link to this page can not connect to the server. Try reputting the link tag. 
              </div>
            }
          }  else {
            return {
              <div>
                {obserser.unobserve()}
              </div>
            }

          }

        }
      }


    })


*/