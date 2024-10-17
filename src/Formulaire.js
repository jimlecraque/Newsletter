import './Formulaire.css'
import email from './static/email.png'
export default function Formulaire()
{
    return(
        <form>
            
            <h3>
                Sign up to our <br />
                <span>Newsletter</span>
            </h3>
            <p>Subscribe to our newsletter and stay updated.</p>
            <label htmlFor="email">
                <img src={email} alt="email-icon" />
                <input type="email" name="email" id="email" placeholder='Your email'/>
            </label>
            <input type="submit" value="Sign up" />
        </form>
    )
}