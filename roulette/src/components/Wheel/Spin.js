const deg = 5000 + Math.random()*5000

const keyframes = 
`@-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(${deg}deg);
      -o-transform: rotate(${deg}deg);
      transform: rotate(${deg}deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(${deg}deg);
      -moz-transform: rotate(${deg}deg);
      -webkit-transform: rotate(${deg}deg);
      -o-transform: rotate(${deg}deg);
      transform: rotate(${deg}deg);
    }
  }`
  
  export default rotating

