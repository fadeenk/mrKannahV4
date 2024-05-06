import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './card.module.css';


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Virtual Business Card`}
        description={`${siteConfig.tagline}`}>
        <div className='container'>
            <div className={styles.virtualBusinessCard}>
                <img src="./img/fadee.jpg" alt="profile-sample1" className={styles.background}/>
                <div id={styles.front} className={styles.content}>
                    <img src="./img/fadee.jpg" alt="profile-sample1" className={styles.profile}/>
                    <h3>Fadee Kannah<span>Chief Software Architect</span></h3>
                    <div className={styles.icons}>
                        <a href="tel:7023373306"><i className="ion-ios-telephone-outline"></i></a>
                        <a href="mailto:fadeekannah@gmail.com"> <i className="ion-ios-email-outline"></i></a>
                        <a href="https://mrkannah.com"> <i className="ion-ios-world-outline"></i></a>
                    </div>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/in/fadeek/"><i className="ion-social-linkedin-outline"></i></a>
                        <a href="https://www.instagram.com/fadeekannah/"> <i className="ion-social-instagram-outline"></i></a>
                        <a href="https://github.com/fadeenk"> <i className="ion-social-github-outline"></i></a>
                    </div>
                    <div style={{padding: '10px 35px'}} className={styles.icons}>
                        <a href="./fadeekannah.vcf" download="fadeekannah.vcf">
                            <i className="ion-person-add"></i>
                        </a>
                        <i className="ion-qr-scanner" onClick={() => {
                            const element = document.querySelector('.'+styles.virtualBusinessCard);
                            element.classList.add(styles.flip);
                        }}></i>
                    </div>
                </div>
                <div id={styles.back} className={styles.content}>
                    <img src="./img/qr.jpg" style={{width: "90%"}} />
                    <i className="ion-android-arrow-back" onClick={() => {
                        const element = document.querySelector('.'+styles.virtualBusinessCard);
                        element.classList.remove(styles.flip);
                    }}></i>
                </div>

            </div>
        </div>
      </Layout>
    );
  }
  