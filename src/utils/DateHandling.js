
const all ={
    replacetoAmeric(date)
    {
        const regex = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/
        const verificationFormat = regex.test(date)
        if(verificationFormat)
        {
            const day = date.substring(0, 2);
            const month = date.substring(3, 5);
            const year = date.substring(6, 11);
            return `${year}-${month}-${day}`
        }
    }
}

export default all