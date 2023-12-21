import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Kapcsolat</span> Felvétel</h1>
                        <div>
                            <label>Név</label>
                            <input type="text" placeholder='Adja meg a nevét'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Adja meg az email címét'/>
                        </div>
                        <div>
                            <label>Üzenet</label>
                            <textarea rows={10} placeholder='Adja meg az üzenetét'/>
                        </div>
                        <button type="submit">Küldés</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
