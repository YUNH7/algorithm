function solution(wallpaper) { // 바탕화면을 형상화한 문자열 배열(정사각형인 격자판)
    // 왼쪽 위(0,0)에서 시작해 세로 좌표 가로 좌표 표현
    // 빈칸은 . 파일은 #
    // 드래그 시 파일 선택, 파일 삭제 가능
    // 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한 번에 지우려고 함
    // 드래그로 파일을 선택하는 방법
    // S(lux, luy) 마우스 왼쪽 버튼으로 클릭한 상태로 E(rdx, rdy)로 이동: 드래그
    // = S(시작점)에서 E(끝점)로 드래그한다.
    // 드래그한 거리 |rdx - lux| + |rdy - luy|
    
    // 리턴: [lux, luy, rdx, rdy] 시작점, 끝점
    return wallpaper.reduce((a, c, i) => {
        const firstFile = c.indexOf('#')

        if (firstFile !== -1) {
            if(a[0] === undefined) a[0] = i
            if(a[1] === undefined || a[1] > firstFile) a[1] = firstFile
            
            const lastFile =  c.lastIndexOf('#') 
            if(a[2] === undefined || a[2] <= i) a[2] = i+1
            if(a[3] === undefined || a[3] <= lastFile) a[3] = lastFile+1          
        }
        return a
    }, [])
}