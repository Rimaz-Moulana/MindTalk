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
       
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        
      }, {
        
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        
      }, {
 
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
       
      }, {

        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
    
      }, {
     
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
     
      }, {
     
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
        
      }, {
   
        name: 'John Doe',
        bankName: 'Example Bank',
        dateTime: '2023-07-24 10:30 AM',
        amount: '$1000.00',
      
      }
    ];
  
    return (
      <div className="flex flex-col gap-4 w-100">
        <div className="bg-white rounded-xl md:col-span-3">
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden text-left p-5 h-15"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            Transaction History
          </div>
        </div>
    
        <div className="bg-white rounded-xl md:col-span-3"></div>
    
        <div className="bg-white rounded-xl md:col-span-3 flex-grow">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-3">
            <div className="flex flex-col">
              <div className="flex flex-row font-bold text-lg">
                <div className="w-1/2 p-2">Bank Name</div>
                <div className="w-1/2 p-2">Date and Time</div>
                <div className="w-1/2 p-2">Amount</div>
              </div>
              {tableData.map((item) => (
                <div key={item.id} className="flex flex-row border-b border-neutral-200">
                  <div className="w-1/2 p-2">{item.bankName}</div>
                  <div className="w-1/2 p-2">{item.dateTime}</div>
                  <div className="w-1/2 p-2">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  