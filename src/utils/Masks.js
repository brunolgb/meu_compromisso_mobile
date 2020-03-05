module.exports = {
    valida_cpf(cpf)
    {
        const regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
        return regex.test(cpf);
    },
    replaceForMask_CPF(value, keypress)
    {
        let final = null;
        if(keypress == "Backspace")
        {
            return value;
        }
        else
        {
            switch (value.length)
            {
                case 4:
                    final = `${value.substring(0, 3)}.${value.substring(3, value.length)}`; break;
                case 8:
                    final = `${value.substring(0, 7)}.${value.substring(7, value.length)}`; break;
                case 12:
                    final = `${value.substring(0, 11)}-${value.substring(11, value.length)}`; break;
                case !value.indexOf("-"):
                        final = `${value.substring(0, 11)}-${value.substring(11, value.length)}`; break;
                default: final = value; break;
            }

            return final;
        }
    },
    valida_phone(phone)
    {
        const regex = /\([0-9]{2}\) [0-9]{5}\-[0-9]{4}/
        return regex.test(phone);
    },
    replaceForMask_phone(value, keypress)
    {
        let final = value;
        if(keypress != "Backspace")
        {
            if(value.length >= 1 && value.length <= 2)
            {
                final = `(${value}`;
            }
            else if(value.length >= 3 && value.length <= 5)
            {
                final = `${value.substring(0, 3)}) ${value.substring(3, value.length)}`;
            }
            else if(value.length == 11)
            {
                final = `${value.substring(0, 10)}-${value.substring(10, value.length)}`;
            }
            else if(value.length == 14 && !value.indexOf("-"))
            {
                final = `${value.substring(0, 10)}-${value.substring(10, value.length)}`;
            }
        }
        return final;
    }
}