import React from 'react'
import Button from './button'
// import './styles/button.css'

function Navbar(){
    return (
        <>
    <div id='NavBar-Cont'>
      <div id='personalNav'>
        <img id="linkedin-icon"src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAgVBMVEULZsP///////4AXL8AWr+QsteVtdicutqKqNShu9wAYML6//8AWcK4yN0DV7l5odMAS7bv9vyCqdIAZMQpbL22yeQAVLnh6fHN2Oq8zudDecPx9/lsksiswuEAUblzl8sAW7YgacE5dMNYhMJki8ZKf8K+0uTO3usARLQARKrW5/KgRLyrAAAEkUlEQVRoge2bbZeaPBCGmSTuYvKsLhsFBN9A0db//wOfACoJgpu2Qzyn5d5z+iFSrswkZPIy8eC18kb+gwgQQjAh6m3lO2356uHyecwa9ND7/S+ieDV9R9F0s4ojAd0GmfzrI+lpl2Sc4Ylnye6caoRevvoL/Dzk0sOV5GHuB4/doOV/AsIPGTa8qoAn2cwXz/kETh7zhsB71Vtpdnrif0LEHN3xrUpQ32wCja98f2CD0kuxo/Fp6/aLgg5NV95lB/Ho/3LAE4fB8ZXYUeuFN/tVwXyQft9VAb9pgTsfllQ64kt+ggf7070jelmBTLT4BL7cNH4tNmn7Pwgd4j05Sw0+Ad+l+bUDyJ1PIFi4a/1KeVpXwKvwsHLqfqXwXI8BV/vX3DGfzhv/q6Evd+x+TyZCa//IMV0pi+79n5DYtfuVA+KGD8vh425bbKV9/+9uv/5SdKPZP3luvxwgMrHp/fsHmDyzn/JFkah/0flgw5ezSdlTRXzcok5MLfm8iOA6az+hRmg7vsyD+wQFTjPn/O0Z7lJBErEPWPH5ATSRNHPNX2pz9XKKiucAO34EhhDHSVu+sVxE7IGWfHO5upqhfYJWfKovV1VNfNf+n+v+JyTBG4Gs+M08udIHYpi04/N1uTStBWmGOABbjv9sft0VUkuUHDME2sY/ltQTpfRdhR/39pdtkMzfJusF9V4Rf6saUMrQJ6i/wPdwLf8dPr4s5x/Whv/qFNV6/teoq0wrpffdXkR+ttB0m37oZfXCXXKaz6fLStNdZjFZtuP/Z+yX1tMPOdPLxKcqYdnUmClcvr51giX/o3npffozE1pQCj49vn+D9s56uvtmNw+Pz5NLNT83IiWBj+fR4o/4Giv4UQTQIQLnp6MGGv+nEaK1p+HyOTS/jIrnNvn6Cym3VIfn95wr1aXH/uMELP8/keoC/T3AAV89dewdBtD5jyeWqgecevcVMfnVIkEIgIeD26B3EEC1n1wmhyQp/HPbCeLggp/uKFOBUNJw3R4Mdn0dAI2venlGb1ayRWC6oHfLAM/+i74vwwvhmp8YiOu+mjv+ylyTylw/3nPAbw8xPNZ/HZwveCvMso1T+4N2kKUTd3zSwedf/xCfjPyRP/JH/sgf+SN/5I/8v5YPMK8fM/Y/00H59Ohruh6/Sb3sIXFMFvqvxZ/xPck13RY6etnj+zv/y+/yB5OZf/KC/J/GfgLvL+BvNP9vXpH/1OSfQey+/Xms5d+9JP9N46cvzf8jVf6j2xrwHWj933n+pwxjI/8zWDjm5ylo3x84z//1weRHW6ftHwYtPmpu17eiN/Ob/HOn+e97cTsnMPL/XeG1tCLt/sXOVRAovf+Q/0/K6yeoGSZ9YgftkEa/fyMSF32QFh33X+omEMXgV1AkPRi757r9qgl2A3dCSefmFbD2/a/lvuyFQ1WC7pdgqsVX44C/5cNcxJF0++39t/LHyF+E6M0gebjwA3g4re68fxms1rnHGEWSelOWr1edaQp99z/TKN5M33A0XcZRd5JC7/1X3Muv1eu6X9lt/60CBENNFaz57vSv8/8H/jViIp5n7SEAAAAASUVORK5CYII='/>
        <div id = "searchBar">
          <img className="nav-icon" src='https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg'/>
          <input id ="Search" type="text" placeholder='Search...'/>
        </div>
        <div className= "homeDiv">
        {/* <button className="nav-button">Home</button> */}
        <img id="homeImg"src="https://static.vecteezy.com/system/resources/thumbnails/010/157/862/small/house-and-home-icon-symbol-sign-free-png.png" alt="" />
        <Button name="Home"/>
          </div>
        <Button name="My Network"/>
        <Button name="Jobs"/>
        <Button name="Messaging"/>
        <Button name="Notifications"/>
        <Button name="Me"/>
        
      </div>
      <div id='businessNav'>
        <p>For Business</p>
        <div id='ad links'>
          <a href='#'>Get Hired Faster</a>
          <a href='#'>Try Premium Free</a>
        </div>
      </div>
    </div>
    </>
    )
}

export default Navbar