function updateDate() {
    const now = new Date();
    
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[now.getDay()];
    
    const dateString = `${month}월 ${date}일(${dayOfWeek})`;
    
    // 요소가 존재할 때만 텍스트를 변경하도록 안전하게 작성
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.innerText = dateString;
    }
}

// 페이지가 완전히 로드된 후 실행
window.onload = updateDate;