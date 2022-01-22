package BOJ;

import java.util.Arrays;
import java.util.Scanner;

public class BOJ_1546 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt(); // 점수 개수
		double [] arr = new double[m];// double로 해야 나눠짐.
		double result = 0; //총합
		for(int i = 0;i<m;i++) {
			arr[i] = sc.nextInt();	
		}
		
		Arrays.sort(arr);	// 배열 오름차순 정렬 - 마지막 값이 최대값	
		for(int i = 0;i<m;i++) {
			result += (arr[i]/arr[m-1]*100);// arr[m-1]이 마지막인덱스값(최대값)
		}		
		System.out.println(result/m);

	}

}
