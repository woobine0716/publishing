package day01;

public class Variable {
    public static void main(String[] args) {
        //interger(정수)
//        int a = 163;
//        System.out.println("제가 좋아하는 배우는 한지민이고 키는");
//        int height = 160;
//        System.out.println(height);
        // 정수형 변수 height 한지민의 키를 넣어주세요.
        // 실행:
        // 제가 좋아하는 배우는 한지민이고 키는
//         160cm 입니다.
//        지금 코스닥 주식은
//        ~~~이고
//        지금 나스닥 주식은
//        ~~~이고
//        지금 비트코인은 ~~~입니다.
        System.out.println("지금 코스닥 주식은");
        int kosdak = 864;
        System.out.println(kosdak);
        System.out.println("지금 나스닥 주식은");
        int nasdaq = 16340;
        System.out.println(nasdaq);
        System.out.println("지금 비트코인은");
        int bitcoin = 88250000;
        System.out.println(bitcoin);

        // 1. 변수 이름 중복이 안된다.
        // 2. 예약어로 변수 이름 안된다. ex) int int 안됨
        // 3. $,_제외하고 특수문자 변수 이름 안된다.
        // 4. 숫자로 변수이름 시작이 안된다. ex) int 1a, 2b, 3c 안됨

        // 변수 국룰
        // 1. 소문자로 시작함
        // 2. 영단어 2개 이상 합칠 때
        // -1) 스네이크 이름 짓기 : ice_latte
        // -2) 낙타식 이름 짓기 : iceLatte
    }
}
