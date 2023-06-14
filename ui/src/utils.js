import {
    minLength, 
    required
} from 'react-admin'

export const validateText = [
    required(), 
    minLength(2), 
]
