$(".form").on("submit",(event)=>{
    event.preventDefault ()
    const newPost= $("#Squawk").val()
    fetch("/api/squawk",{
        method
    })
})
