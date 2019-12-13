export default {
    messages: {
        required() { return 'This field is required'; } ,
        email() { return 'Please enter a valid email address'; },
        pattern() { return 'The value must match the pattern'; },
        url(){ return 'Please enter a valid URL'; },
        date() { return 'Please enter a valid date'; },
        dateISO() { return 'Please enter a valid date (ISO)'; },
        number() { return 'Please enter a valid number'; },
        digits() { return 'Please enter only digits'; },
        maxlength(props) { return `Please enter no more than ${props.max} characters`; },
        minlength(props) { return `Please enter at least ${props.min} characters`; },
        max(props){ return `Please enter a value less than or equal to ${props.max}`; },
        min(props){ return `Please enter a value greater than or equal to ${props.min}`;},
        equalto() { return 'Please enter the same value again'; },
        remote() { return 'Please fix this field'; }
    }
};