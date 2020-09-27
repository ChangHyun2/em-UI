https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

componentDidMount(){
    document.addEventListener()
}
componentWillUnmount(){
    document.removeEventListener()
}

>> Hook

useEffect(()=>{
    document.addEventListener(){

    }

    return ()=>{
        document.removeEventListener();
    }
}, [])