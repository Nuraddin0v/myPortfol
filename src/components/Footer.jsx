import React from 'react'
import "./Section.scss";

const Footer = () => {
  return (
    <div>
        <section className="footer">
        <div className="footer_main">
          <div>
            <span>saOne</span>
            <ul>
              <li>
                <a href="/#">hpavilion115@gmail.com</a>
              </li>
              <li>
                <a href="https://t.me/a_nuraddinov_1111">
                  t.me/a_nuraddinov_1111
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="/work">My work</a>
            </li>
            <li>
              <a href="/shelf">My shelf</a>
            </li>
            <li>
              <a href="/resume">My resume</a>
            </li>
          </ul>
        </div>
        <div className="footer_hr">
          <span>© Nuraddinov Abdulhamid 2023</span>
          <ul>
            <li>tg</li>
            <li>ista</li>
            <li>in</li>
            <li>wa</li>
            <li className="li">face</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer