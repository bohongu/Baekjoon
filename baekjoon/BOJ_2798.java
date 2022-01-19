package BOJ;

import java.util.Scanner;

public class BOJ_2798 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt(); 
		int m = sc.nextInt(); 
		int total = 0; 
		int max = 0;
		
		int [] arr = new int[n];
		for(int i=0;i<n;i++) {
			arr[i] = sc.nextInt();
		}
		for(int i=0;i<n;i++) {
			for(int j=i+1;j<n;j++) {
				for(int k=j+1;k<n;k++) {
					total = arr[i] + arr[j] + arr[k];
					if(total > max && total <= m) {
						max = total;
					}
				}
			}
		}
		System.out.println(max);	
	}

}
