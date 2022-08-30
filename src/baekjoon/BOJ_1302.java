package baekjoon;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class BOJ_1302 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		HashMap<String, Integer> map = new HashMap<String, Integer>();
	
		for(int i=0;i<n;i++) {
			String bookTitle = sc.next();
			
			if(map.containsKey(bookTitle)) {
				map.put(bookTitle, map.get(bookTitle)+1);
			} else {
				map.put(bookTitle, 1);
			}
		}
		
		/* entrySet() -> key/value  |  keySet() -> key
		for(Map.Entry<String, Integer> entry : map.entrySet()) {
			System.out.println(entry.getKey() + " : " + entry.getValue());			
		}*/
		
		int max = 0;
		String result ="";
		
		for(Map.Entry<String, Integer> entry : map.entrySet()) {
			if(max < entry.getValue()) {
				max = entry.getValue();
				result = entry.getKey();
			} else if(max == entry.getValue()) {
				if(result.compareTo(entry.getKey()) > 0) //compareTo --> 음수 : 자신이 아닌 다른 원소가 크다 / 0 : 같다 / 양수 : 다른 원소보다 자신이 더 크다. (문자열 아스키 코드 비교 --> 크다 -> 알파벳 뒤쪽 위치)
					result = entry.getKey();
			}
		}
		System.out.println(result);
		
	}

}