// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
const int TOTALLOT = 8;
class ParkingLot
{
private:
    int reserved[TOTALLOT] = {-1, -1, -1, -1, -1, -1, -1, -1};
    int currentIndex = -1;

    int getLength()
    {
        return sizeof(this->reserved) / sizeof(int);
    }
    int isAvailable(int slot)
    {
        return (this->reserved[slot - 1] == -1);
    }

public:
    int getTotalReserved()
    {
        int i;
        int count = 0;
        for (i = 0; i < getLength(); i++)
        {
            if (this->reserved[i] != -1)
            {
                count++;
            }
        }
        return count;
    }
    void availableParkingLot()
    {
        int i;
        cout << "Available Parking Spots: ";
        for (i = 0; i < TOTALLOT; i++)
        {
            if (reserved[i] == -1)
            {
                cout << i + 1 << " ";
            }
        }
        cout << endl;
    }
    void reservedParkingLot()
    {
        int i;
        cout << "Reserved Parking Spots: ";
        for (i = 0; i < TOTALLOT; i++)
        {
            if (reserved[i] == 1)
            {
                cout << i + 1 << " ";
            }
        }
        cout << endl;
    }
    void reserveParkingLot()
    {
        int i, slot;
        this->availableParkingLot();
        cout << "Enter slot to reserve: ";
        cin >> slot;
        if (this->isAvailable(slot))
        {
            reserved[slot - 1] = 1;
            cout << "Spot reserved";
        }
        else
        {
            cout << "Spot is not available";
        }
        cout << endl;
    }
    void releaseParkingLot()
    {
        int i, slot;
        this->reservedParkingLot();
        cout << "Enter slot to reserve: ";
        cin >> slot;
        if (!this->isAvailable(slot))
        {
            reserved[slot - 1] = -1;
            cout << "Spot release";
        }
        else
        {
            cout << "Spot is not reserved";
        }
        cout << endl;
    }
};

int main()
{
    // Write C++ code here
    ParkingLot parkinglot;
    int choice;
    do
    {
        cout << "------------Menu--------------" << endl
             << endl;

        cout << "Total reserved: " << parkinglot.getTotalReserved() << endl
             << endl;

        cout << "1. View available parking spots" << endl;
        cout << "2. View reserved parking spots" << endl;
        cout << "3. Reserve parking spot" << endl;
        cout << "4. Release parking spot" << endl;
        cout << "5. Exit" << endl
             << endl
             << endl;

        cout << "Enter menu choice: " << endl;
        cin >> choice;

        cout << "---------------" << endl
             << endl;
        if (choice == 1)
            parkinglot.availableParkingLot();
        if (choice == 2)
            parkinglot.reservedParkingLot();
        if (choice == 3)
            parkinglot.reserveParkingLot();
        if (choice == 4)
            parkinglot.releaseParkingLot();
        cout << endl
             << endl
             << endl;
    } while (choice != 5);

    return 0;
}