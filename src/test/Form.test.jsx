import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Components/Form'

describe('Form component', () => {
    let inputName;
    let inputEmail;
    let button;
    beforeEach(() => {
        render(<Form />);
        inputName = screen.getByLabelText('Name');
        inputEmail = screen.getByLabelText('Email');
        button = screen.getByRole('button', { name: 'Send' })
    })

    test('Check if the name field update', async () => {
        fireEvent.change(inputName, {
            target: { value: 'Juliana' }
        })
        expect(inputName.value).toBe('Juliana')
    })

    test('Check the form is sending the input values', async () => {
        fireEvent.change(inputName, {
            target: { value: 'Juliana' }
        })
        fireEvent.change(inputEmail, {
            target: { value: 'juliyepes@gmail.com' }
        })
        fireEvent.click(button)

        const formRes = await screen.findByText(/Gracias Juliana, te contactaremos cuanto antes via mail/i)
        expect(formRes).toBeInTheDocument()
    })
})