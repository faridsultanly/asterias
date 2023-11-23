import React, { Component } from 'react'
import Button from '../Button'
import img1 from '../../img/vector1.png';
import img2 from '../../img/vector2.png';
import img3 from '../../img/vector3.png';
import ServiceCard from '../ServiceCard';
export class ServiceSection extends Component {
  render() {
    return (
        <section>
        <div className="container">
            <div className="service_main">
                <div className="service_text">
                    <h4>XİDMƏTLƏRİMİZ</h4>
                    <h2>Peşəkar təlimçi & Exspertlər</h2>
                    <h3>Ullam magnam sint laboriosam recusandae dolor corrupti voluptatibus. Nihil omnis qui.</h3>
                    <p className="servis_paragraph">Recusandae dicta perferendis aliquam eligendi enim. Quia inventore perferendis ullam molestiae in sint nostrum. Aperiam qui repellendus dolores cupiditate nostrum.</p>
                    <Button className="btn" text="Daha ətraflı" />
                </div>

                <div className="service_grid_block">
                    <ServiceCard
                        url={img1}
                        title={'Fuga esse voluptas'}
                        text={'Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.'}
                    />
                    <ServiceCard
                        url={img2}
                        title={'Fuga esse voluptas'}
                        text={'Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.'}
                    />
                    <ServiceCard
                        url={img3}
                        title={'Fuga esse voluptas'}
                        text={'Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.'}
                    />
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default ServiceSection