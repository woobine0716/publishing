package day02;

public class dataType {
    public static void main(String[] args) {
        //정수 int;

        //실수 double 3.14;

        //문자 char 'k';

        //문자들 string "자바꿀잼";

        //논리형 boolean false;

//        int a = 100;
//        double b = 3.14;
//        char c = 'k';
//        String d = "자바꿀잼";
//        boolean e = false;

//        System.out.println("a에 담긴 수는" + a);
//        System.out.println("b에 담긴 수는" + b);
//        System.out.println("c에 담긴 문자는" + c);
//        System.out.println("d에 담긴 문자는" + d);
//        System.out.println("e에 담긴 논리는" + e);

        // kosdaq을 실수 타입으로 선언하고, 현재 값을 넣어주고
        // 현재 kosdaq 지수는 kosdaq 입니다.

        // wednsday을 문자들 타입으로 선언하고, 부처님 오신날!
        // 내일 모레는 wednsday
//        double kosdaq = 854.43;
//        System.out.println("현재 코스닥 지수는" + kosdaq);
//        String wednsday = "부처님 오신 날!";
//        System.out.println("내일 모레는" + wednsday);
        // 변수들로만 사용해서
        // "내일 모레는" 이라는 변수를 담는것을 사용하고
        // "수업이 없는 날" 이라는 변수를 담는 것을 사용해서
        // 결과: "내일 모레는 수업이 없는 날"

        // "제가 좋아하는 과목" 이라는 변수를 담는것을 사용하고
        // "~~" 이라는 변수를 담는 것을 사용하고
        // 결과: "제가 좋아하는 과목 "~~"

        // "손흥민 선수 곳 갯수:" 이라는 변수를 담는 것 사용하고
        // "12" 이라는 변수를 담는 것을 사용해서
        // 손흥민 선수 골 갯수:12
        String day = "내일 모레는 ";
        String noClass = "수업이 없는 날";
        System.out.println(day + noClass);

        String like = "제가 좋아하는 과목은";
        String sport = " 체육 입니다.";
        System.out.println(like + sport);
        String son = "손흥민 선수는 지금 리그 골이 ";
        int goals = 17;
        System.out.println(son + goals);

    }
}
