module.exports = {
    valida_cpf(cpf)
    {
        const regexCpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
        return regexCpf.test(cpf);
    },
    replaceForMask_CPF(cpf, keypress)
    {
        let final = null;
        if(keypress == "Backspace")
        {
            return cpf;
        }
        else
        {
            if(cpf.length == 3)
            {
                final = `${cpf.substring(0, 3)}.${cpf.substring(3, cpf.length)}`
            }
            else if(cpf.length == 7)
            {
                final = `${cpf.substring(0, 7)}.${cpf.substring(8, cpf.length)}`
            }
            else if (cpf.length == 11) {
                final = `${cpf.substring(0, 11)}-${cpf.substring(12, cpf.length)}`
            }
            else{
                final = cpf
            }

            return final;
        }
    }
}