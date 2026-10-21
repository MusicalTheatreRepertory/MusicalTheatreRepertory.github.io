import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './spa.css'
import '../../../styles/fonts.css'
import SPALayout from '../../../layouts/SPALayout.js'

const Board = () => {
  return (
    <SPALayout>
      <main>
        <section className="SPAheader">
          <div>
            <h1>MTR Board</h1>
            <h3>Julian Gajewski</h3>
            <h3>President</h3>
            <br />

            <h3>Paige Speaker</h3>
            <h3>Secretary</h3>
            <br />

            <h3>Keilah Stephanie Mora</h3>
            <h3>Production Manager</h3>
            <br />

            <h3>Nathan Bass</h3>
            <h3>Finance Chair</h3>
            <br />

            <h3>Sara Gutierrez</h3>
            <h3>EDIA Chair</h3>
            <br />

            <h3>Samantha Caldera</h3>
            <h3>PR Chair</h3>
            <br />

            <h3>Kassidy Atherton</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Madison Bishop</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Courtney Chu</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Juan Moreno Coronado</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Hope Craig</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Lucas Cruz</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Cam Eyanson</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Serena Feng</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Casey Hilton</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Piper Huntley</h3>
            <h3>Member At Large</h3>
            <br />


            <h3>Mia Murillo</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Richie Nickel</h3>
            <h3>Member At Large</h3>
            <br />

            <h3>Ben Williams</h3>
            <h3 style={{ paddingBottom: '50px' }}>Member At Large</h3>
          </div>
        </section>
      </main>
    </SPALayout>
  )
}

export default Board
