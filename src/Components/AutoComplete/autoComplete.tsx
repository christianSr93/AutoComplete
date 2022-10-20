import { useAutoComplete } from '../hooks/useAutoComplete';
import './AutoComplete.css'

export const AutoComplete = () => {
    const {options, search, display, wrapperRef, handleSearch, handleDisplay, handleSelectedChar} = useAutoComplete();
   
    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input
                id="auto"
                placeholder="Type to search"
                value={search}
                onChange={handleSearch}
                onClick={handleDisplay}
            />
            {
                display &&
                <div className="autoContainer">
                    {
                        options.filter(({ name })=> (name.toLowerCase()).indexOf(search.toLowerCase()) >-1 ) 
                            .map((value, i) =>{
                                let string = value.name.substring(
                                    0,
                                    value.name.toLowerCase().indexOf(search.toLowerCase())
                                );
                                let endString = value.name.substring(
                                    value.name.toLowerCase().indexOf(search.toLowerCase()) +
                                    search.length
                                );
                                
                                return (
                                    <div
                                        className="option"
                                        key={i}
                                        tabIndex={0}
                                        onClick={()=> handleSelectedChar(value.name)}
                                    >
                                        <div>
                                            {string}
                                            <span className='highlight'>{search}</span>
                                            {endString}
                                        </div>
                                        <div className='img-container'>
                                            <img src={value.image} alt="character" />
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            }
        </div>
    )
}
