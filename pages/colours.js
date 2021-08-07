import Head from 'next/head'
import Navbar from '../components/navbar.js'

export default function Colours() {
  return (
    <div>
      <Head>
        <title>Altitude Design - Colours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
        <div className="container mx-auto p-4">
        <h2 className="text-white text-4xl font-semibold mb-6">Dark Palette</h2>    
        </div>
        <div className="container mx-auto bg-white p-6 rounded">
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-20 bg-dark flex align-middle justify-center text-white text-4xl rounded">
                    Dark
                </div>
                <div className="p-20 bg-dark-900 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 900
                </div>
                <div className="p-20 bg-dark-800 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 800
                </div>
                <div className="p-20 bg-dark-700 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 700
                </div>
                <div className="p-20 bg-dark-600 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 600
                </div>
                <div className="p-20 bg-dark-500 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 500
                </div>
                <div className="p-20 bg-dark-400 flex align-middle justify-center text-white text-4xl rounded">
                    Dark 400
                </div>
                <div className="p-20 bg-dark-300 flex align-middle justify-center text-dark-600 text-4xl rounded">
                    Dark 300
                </div>
                <div className="p-20 bg-dark-200 flex align-middle justify-center text-dark-700 text-4xl rounded">
                    Dark 200
                </div>
                <div className="p-20 bg-dark-100 flex align-middle justify-center text-dark-800 text-4xl rounded">
                    Dark 100
                </div>
            </div>
        </div>
        <div className="container mx-auto p-4 mt-20">
        <h2 className="text-white text-4xl font-semibold mb-6">Primary Palette</h2>    
        </div>
        <div className="container mx-auto bg-white p-6 rounded">
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-20 bg-primary flex align-middle justify-center text-white text-4xl rounded">
                    Primary
                </div>
                <div className="p-20 bg-primary-900 flex align-middle justify-center text-white text-4xl rounded">
                Primary 900
                </div>
                <div className="p-20 bg-primary-800 flex align-middle justify-center text-white text-4xl rounded">
                Primary 800
                </div>
                <div className="p-20 bg-primary-700 flex align-middle justify-center text-white text-4xl rounded">
                Primary 700
                </div>
                <div className="p-20 bg-primary-600 flex align-middle justify-center text-white text-4xl rounded">
                Primary 600
                </div>
                <div className="p-20 bg-primary-500 flex align-middle justify-center text-white text-4xl rounded">
                Primary 500
                </div>
                <div className="p-20 bg-primary-400 flex align-middle justify-center text-white text-4xl rounded">
                Primary 400
                </div>
                <div className="p-20 bg-primary-300 flex align-middle justify-center text-primary-600 text-4xl rounded">
                Primary 300
                </div>
                <div className="p-20 bg-primary-200 flex align-middle justify-center text-primary-700 text-4xl rounded">
                Primary 200
                </div>
                <div className="p-20 bg-primary-100 flex align-middle justify-center text-primary-800 text-4xl rounded">
                Primary 100
                </div>
            </div>
            
        </div>

        <div className="container mx-auto p-4 mt-20">
        <h2 className="text-white text-4xl font-semibold mb-6">Accents Palette</h2>    
        </div>
        <div className="container mx-auto bg-white p-6 rounded">
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-20 bg-lilac flex align-middle justify-center text-white text-4xl rounded">
                    Lilac
                </div>
                <div className="p-20 bg-sundown flex align-middle justify-center text-white text-4xl rounded">
                Sundown
                </div>
            </div>
            
        </div>
    </div>
  )
}
