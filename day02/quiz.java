package day02;

import java.util.Scanner;

public class quiz {
    public static void main(String[] args) {
        //1.년도를 입력하면 나이가 나오는 내용
        //ex) 몇년생인가요? > 2000년생이면 24살 이시군요.

        //2.정삼각형 넓이 구하는 내용
        //ex)밑변 입력, 높이 입력 > 정삼각형의 넓이는

        //3.정사각형 넓이 구하는 내용
        //ex 한 변 입력 > 정사각형의 넓이는 ~~

        //4. 엔화 계산기
        // ex) 원화를 입력하세요. 10000원 > 1139엔

        Scanner sc = new Scanner(System.in);
        System.out.println("몇 년생인가요?");
        int a = sc.nextInt();
        int b = 1976;
        System.out.println( a + "년생이시면 " + (a-b) + "살이시군요");


        System.out.println("한 변 입력");
        int c = sc.nextInt();
        double triangle_width = c * c * 0.5;
        System.out.println("정삼각형의 넓이" + triangle_width);

        System.out.println("한 변 입력");
        int side = sc.nextInt();
        System.out.println("정사각형의 넓이는 " + (side*side) + " 군요");


        System.out.println("원화를 입력하세요.");
        int won = sc.nextInt();
        double yen = won * 8.78;
        System.out.println("엔화" + yen);
    }
}
