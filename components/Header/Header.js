import Link from 'next/link';
import Head from 'next/head';

export default function Header(props){
    return(
        <div>
            <header className="header" >
                <Head>
                    <title>{props.title}</title>
                        <link rel="stylesheet" href="/styles/page.css"/>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                </Head>
                <Link href='/'>
                    <a>
                        <img className="logo" alt="logo Le Festin" src="/img/icone.jpg" />  
                        <img className="logo" alt="logo Le Festin" src="/img/logo.svg" />
                    </a>
                </Link>
            </header>
        </div>
    )
}