import React, { Component } from 'react'
import Button from '../Button'

export class StartOnlineSection extends Component {
  render() {
    return (
        <section>
            <div className="start_development_section">
                <div className="container">
                    <div className="development_main" >
                        <div className="development_text">
                            <h2>Start Online Development</h2>
                            <p>Enim sit ea est. Inventore porro voluptate at omnis quae voluptas dicta ex sequi. Facilis nam qui. Quasi doloremque magnam odit. Eos voluptatibus facere ut molestiae maiores atque. </p>
                        </div>
                        <div className="development_btn">
                            <Button className="btn development_btn_appeal" text='Müraciət et' />
                            <Button className="btn development_btn_detailed" text='Daha ətraflı' />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
  }
}

export default StartOnlineSection