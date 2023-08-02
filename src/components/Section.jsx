/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.scss";
import { SidebarData } from "./SidebarData";
const Section = () => {
  const [sidebar, setSidebar] = useState(false);
  function viewSidebar() {
    setSidebar(!sidebar);
    // console.log(sidebar);
  }
  return (
    <div>
      <header>
        <div className='navbar'>
          <Link className='nav-logo' to='/'>
            sa
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 512 512'>
              <path d='M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
            </svg>
            ne
          </Link>
          <div className='sidebarIcon' onClick={viewSidebar}>
            {sidebar ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='2em'
                viewBox='0 0 384 512'
                // fill='#4831d4'
              >
                <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='2em'
                viewBox='0 0 448 512'
                // fill='#4831d4'
              >
                <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
              </svg>
            )}
          </div>
          <div style={{ display: sidebar ? "" : "none" }} className='sidebar'>
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      <span>{item.icon}</span>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <section tabIndex={"1"}>
        <div className='boxes'>
          <article>
            <div tabIndex={"2"} className='box one'>
              <h1 className='heading'>
                Frontend Developer<span>.</span>
              </h1>
              <p className='bolid'>
                I like to craft solid and scalable frontend products with great
                user experiences.
              </p>
            </div>
          </article>
          <figure tabIndex={"4"} className='box two'>
            <div className='figure'></div>
          </figure>
        </div>
        <div tabIndex={"3"} className='text bottom'>
          <ul>
            <li>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </li>
            <li>
              Proven experience building successful products for clients across
              several countries.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Section;
