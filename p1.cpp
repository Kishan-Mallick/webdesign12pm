#include <iostream>
using namespace std;

class Javascript
{
    public:
        void log(string s){
            cout<<s<<endl;
        }
};
int main() {
    Javascript console;
    console.log("Hello World");
    return 0;
}