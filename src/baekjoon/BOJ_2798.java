package BOJ;

import java.util.Scanner;

public class BOJ_2798 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();  //카드 개수
		int m = sc.nextInt();  //딜러가 외친 수
		int total = 0; //카드 3장 합
		int max = 0; // 근사값
		
		int [] arr = new int[n];
		for(int i=0;i<n;i++) {
			arr[i] = sc.nextInt();
		}
		for(int i=0;i<n;i++) {
			for(int j=i+1;j<n;j++) {
				for(int k=j+1;k<n;k++) {
					total = arr[i] + arr[j] + arr[k];
					if(total <= m) {
						if(total>max) {
							max = total;
						}
					}
				}
			}
		}
		System.out.println(max);	
	}

}
