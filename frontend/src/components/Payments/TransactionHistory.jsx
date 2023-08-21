export default function TransHistory() {
    const tableData = [
      {
        id: 1,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      },
      {
        id: 1,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      },
      {
        id: 2,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      },
      {
        id: 3,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      },
      {
        id: 4,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
        // No status property provided for this item
      },
      {
        id: 5,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 6,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 7,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 8,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 9,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 10,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }, {
        id: 11,
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        status: 'done',
      }
    ];
  
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-white rounded-xl md:col-span-3">
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden text-left p-5 h-15"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            Transaction History
          </div>
        </div>
  
        <div className="bg-white rounded-xl md:col-span-3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40">
            {/* Content for the middle area goes here */}
          </div>
        </div>
  
        <div className="bg-white rounded-xl md:col-span-3 flex-grow">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-5">
            <div className="flex flex-col">
              <div className="flex flex-row font-bold text-lg">
                <div className="w-1/5 p-2">Receiver Name</div>
                <div className="w-1/5 p-2">Bank Name</div>
                <div className="w-1/5 p-2">Date and Time</div>
                <div className="w-1/5 p-2">Amount</div>
                <div className="w-1/5 p-2">Status</div>
              </div>
              {tableData.map((item) => (
                <div key={item.id} className="flex flex-row border-b border-neutral-200">
                  <div className="w-1/5 p-2">{item.name}</div>
                  <div className="w-1/5 p-2">{item.bankName}</div>
                  <div className="w-1/5 p-2">{item.dateTime}</div>
                  <div className="w-1/5 p-2">{item.amount}</div>
                  <div className="w-1/5 p-2">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  