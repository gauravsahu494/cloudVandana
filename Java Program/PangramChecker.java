import java.util.*;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter your Input: ");  
        String str= sc.nextLine();  
        boolean isPangram = isPangram(str.toLowerCase());
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        sc.close();
    }

    public static boolean isPangram(String str) {
        HashSet<Character> st = new HashSet<>();
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                st.add(c);
            }
        }
        return st.size() == 26;
    }
}