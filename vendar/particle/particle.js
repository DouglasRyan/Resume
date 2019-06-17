particlesJS("particles-js", {
  "particles": {      //粒子
    "number": {     //数量
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {        //颜色
      "value": "#66ff99"    //节点颜色
    },
    "shape": {        //形状
      "type": "polygon",
      "stroke": {
        "width": 2,
        "color": "#69f"   //节点边框颜色
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 50,
        "height": 50
      }
    },
    "opacity": {      //透明度
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.6,
        "sync": false
      }
    },
    "size": {       //大小
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {        //连接线
      "enable": true,
      "distance": 150,
      "color": "#abcdef",  //线条颜色
      "opacity": 0.3,
      "width": 2
    },
    "move": {         //移动设置
      "enable": true,
      "speed": 8,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {        //互动
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false    //视觉效果
});
