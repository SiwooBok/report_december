 // 방법 화면에 fixed 되는 100%의 박스를 만든다음에 그 박스의 자식으로 이미지를 넣는다.

  // img를 모으는 querySelectorAll
  const container = document.querySelector('.container');
  const thumbImg = document.querySelectorAll('.thumb_img');
  const wrap = document.querySelector('.wrap');

  // 보여주는 박스
  function showBigImg() {

    let picAttr = this.getAttribute("src");

    // div 만들기 - 밑에서 클래스추가되면 스타일 시트에서 클래스 정의해주면됨.
    let windowBox = document.createElement("div");
    let windowInnerBox = document.createElement("div");
    let bigPicBox = document.createElement("div");
    let bigPic = document.createElement("img");

    let textBox = document.createElement("div");
    let textTitle = document.createElement("div");
    let textDescryption = document.createElement("div");
    
    // 속성 설정하기
    windowBox.setAttribute("class", "window_box");
    windowInnerBox.setAttribute("class", "window_innerbox");
    bigPicBox.setAttribute("class", "big_image");
    bigPic.setAttribute("src", picAttr);

    textBox.setAttribute("class", "image_text");
    textTitle.setAttribute("class", "title");
    textDescryption.setAttribute("class", "descryption");

    // textContent 대신 let spanText = document.createTextNode('X') 처럼 textnode를 하나 만들어서 appendchild 해도됨
    // 이렇게. newSpan.appendChild(spanText); ( dom_31 참고 )
    textTitle.textContent = '제목입니다.'
    textDescryption.textContent = '이 사진은 5년전에 만들어졌습니다'
    
    // 노드 접붙이기
    textBox.appendChild(textTitle);
    textBox.appendChild(textDescryption);

    bigPicBox.appendChild(textBox);
    bigPicBox.appendChild(bigPic);
    windowInnerBox.appendChild(bigPicBox);
    windowBox.appendChild(windowInnerBox);

    // document.body.appendChild(windowBox);
    wrap.appendChild(windowBox);

    windowBox.addEventListener('click', () => {
      wrap.removeChild(windowBox);
    })
    
  }

  // function closeImg() {
  //   wrap.removeChild(windowBox);
  // }

  // for 문 (어떤 것이 클릭되었는지 알아내는 기능)
  for(let i=0; i<thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', showBigImg)
  }


