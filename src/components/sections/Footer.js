import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="footer_head">
                    <div className="footer_head_text">
                        <h2>Elə indi inkişafa başla!</h2>
                        <p>Dolores doloremque minima nobis sit doloribus sapiente doloremque.</p>
                    </div>
                    <div className="footer_head_btn">
                        <button className="btn">Müraciət et</button>
                        <button className="btn development_btn_detailed backNone">Bizimlə əlaqə</button>
                    </div>
                </div>
                <div className="footer_center">
                    <div className="footer_center_logo">
                        <img src="./img/Frame 94.png" />
                    </div>
                    <div className="footer_center_text">
                        <h3>ƏLAQƏ MƏLUMATLARI</h3>
                        <p>Email: education@edu.com</p>
                        <p>Phone: +994 (50) 567-89-00</p>
                    </div>
                    <div className="footer_center_inp">
                        <h3>YENİLİKLƏRƏ ABUNƏ OLMAQ</h3>
                        <div>
                            <input type="text" placeholder="E-mail" />
                            <button className="btn">Təsdiq et</button>
                        </div>
                    </div>
                </div>
                <div className="footer_end">
                    <div>
                        <span>Məxfilik siyasəti</span>
                        <span>Şərtlər və istifadə qaydaları</span>
                    </div>
                    <div>
                        <span>© 2023 Asterias | Bütün hüquqlar qorunur</span>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
