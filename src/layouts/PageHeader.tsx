import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function PageHeader() {
    const [showFullWidthSearchBar, setShowFullWidthSearchBar] = useState(false)

    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidthSearchBar}/>
        <form className= {`gap-4 flex-grow justify-center ${showFullWidthSearchBar ? "flex" : "hidden md:flex"}`}>
            {showFullWidthSearchBar && (<Button onClick={() => setShowFullWidthSearchBar(false)} type="button" size="icon" variant="ghost" className="flex-shrink-0">
                <ArrowLeft />
            </Button>
            )}
            <div className="flex flex-grow maw-w-[600px]">
                <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"/>
                <Button className="bg-secondary hover:bg-secondary-hover py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
                    <Search />
                </Button>
            </div>
            <Button type="button" size="icon" className="flex-shrink-0 bg-secondary hover:bg-secondary-hover">
                <Mic />
            </Button> 
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearchBar ? "hidden" : "flex"}`}>
            <Button onClick={() => setShowFullWidthSearchBar(true)} size="icon" variant="ghost" className="md:hidden">
                <Search />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
                <Mic />
            </Button>
            <Button size="icon" variant="ghost">
                <Upload />
            </Button>
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User/>
            </Button>
        </div>
    </div>
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
    const {toggle} = useSidebarContext()
    return <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
            <Button onClick={toggle} variant="ghost" size="icon">
                <Menu />
            </Button>
            <div className="h-6 ">TinoTube</div>
        </div>
}