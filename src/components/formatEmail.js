export default class FormatEmail{
    static emailFormat = ({name, email, message}) => {
        const retval = `
            Dear Songa,
            ${name} has sent a message!
            Sender Email: ${email}

            Message:
            ${message}
        `;
        return retval;
    }
}