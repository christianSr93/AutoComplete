import { useEffect, useRef, useState} from 'react'
import { getCharacters } from '../../API/getCharacters';

export const useAutoComplete = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState<{name: string, image: string}[]>([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let mounted = true;
        if(mounted){
            getCharacters()
            .then(data => {
                setOptions(data);
            })
        }
        return () => {mounted = false};
    },[])

    const handleSearch = (event: any) =>{
        setSearch(event.target.value)
    }

    const handleDisplay = () =>{
        setDisplay(true)
    }

    const handleSelectedChar = (char: string) =>{
        setSearch(char);
        setDisplay(false);
    }

    const handleClickOutside = (event:any) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);
    
    return{
        handleSearch,
        handleDisplay,
        handleSelectedChar,
        handleClickOutside,
        display,
        options,
        search,
        wrapperRef
    }
}
