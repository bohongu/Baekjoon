package BOJ;

import java.util.Arrays;
import java.util.Scanner;

public class BOJ_1546 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt(); // 점수 개수
		double [] arr = new double[m]; // 배열 타입을 int가 아닌 double로 줘야하는 이유 : 나누기 연산 시 소수점이 필요(정수타입 시 / 연산하면 0이 되어버림)
		double result = 0;
		for(int i = 0;i<m;i++) {
			arr[i] = sc.nextInt();	
		}
		
		Arrays.sort(arr);	// 배열 오름차순 정렬 - 마지막 값이 최대값이 된다	 (최대 or 최소값 구할 때 많이 이용)	
		for(int i = 0;i<m;i++) {
			result += (arr[i]/arr[m-1]*100);// arr[m-1]이 마지막인덱스값(최대값)
		}		
		System.out.println(result/m); // 총합 / 점수 개수 : 평균.

	}

}
