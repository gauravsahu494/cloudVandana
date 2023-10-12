import java.util.*;
class RomanToInteger {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter a roman number: ");  
        String str= sc.nextLine();  
        int result = romanToInt(str);
        System.out.println(result);
        sc.close();
    }
    
        public static int romanToInt(String str) {
        HashMap<Character, Integer> mp = new HashMap<>();
        mp.put('I', 1);
        mp.put('V', 5);
        mp.put('X', 10);
        mp.put('L', 50);
        mp.put('C', 100);
        mp.put('D', 500);
        mp.put('M', 1000);

         int res = mp.get(str.charAt(str.length()-1));
        for(int i=str.length()-2;i>=0;i--){
            if(mp.get(str.charAt(i))<mp.get(str.charAt(i+1))){
                res-=mp.get(str.charAt(i));
            }
            else{
                res+=mp.get(str.charAt(i));
            }
        }
        return res;
    }
}