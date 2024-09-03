import 'package:flutter/material.dart';
import 'swap_icon.dart';
import 'request_box.dart';

class Request extends StatefulWidget {
  const Request({super.key});

  @override
  _RequestState createState() => _RequestState();
}

class _RequestState extends State<Request> { 
   List<Widget> containerList = [];

  @override
  Widget build(BuildContext context) {   
    const Color gray =  Color(0xAAD9D9D9); 
    const Color red = Color(0xAAC63F43);
    const TextStyle bold = TextStyle(fontSize: 20, fontWeight: FontWeight.w900,);
    final ButtonStyle formButton = ElevatedButton.styleFrom(padding: const EdgeInsets.symmetric(horizontal: 7));

    return Container(
      width: 300.0,
      height: 600.0,
      padding: const EdgeInsets.only(
        bottom: 30,
        top: 30,
        left: 30,
        right: 30
      ),
      decoration: BoxDecoration(
        color: gray,
        borderRadius: BorderRadius.circular(16.0),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start,
        children: [          
          const Text("Current Requests:",style: bold),
          const SizedBox(height: 5),
          Column(children: containerList),
          Expanded(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: GestureDetector(
                onTap: () => showDialog<String>(
                  context: context,
                  builder: (BuildContext context) => AlertDialog(
                    title: const Text('New Request', style: bold),
                    content: SizedBox(
                      height: 300.0,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              const Text('Date:',style: TextStyle(fontSize: 16,),),
                              const SizedBox(width: 10),
                              ElevatedButton(onPressed: () {print('test');}, style: formButton, child: const Text('Today',style: TextStyle(fontSize: 14,),)),
                              const SizedBox(width: 10),
                              ElevatedButton(onPressed: () {print('test1');}, style: formButton, child: const Text('Tomorrow',style: TextStyle(fontSize: 14,),))
                            ],
                          ),
                          const SizedBox(height: 5),
                          Row(
                            children: [
                              const Text('Time:',style: TextStyle(fontSize: 16,),),
                              const SizedBox(width: 10),
                              ElevatedButton(onPressed: () {print('test2');}, style: formButton, child: const Text('12:15 pm',style: TextStyle(fontSize: 14,),))
                            ],
                          ),
                          const SizedBox(height: 10),
                          const Text('Meal Selection:', style: TextStyle(fontSize: 16,),),
                          const SizedBox(height: 10),
                          Row(
                            children: [
                              Container(
                                width: 200.0,
                                height: 50.0,
                                padding: const EdgeInsets.all(10.0),
                                decoration: BoxDecoration(
                                  color: gray,
                                  borderRadius: BorderRadius.circular(16.0),
                                ),
                                child: const Text("Halal [Diabetes]", style: bold, textAlign: TextAlign.center,),
                              ),
                              const SizedBox(width: 5),
                              const ImageButton(),
                            ],
                          )
                        ],
                      ),
                    ),
                    actions: <Widget>[
                      TextButton(
                        onPressed: () => Navigator.pop(context, 'Cancel'),
                        child: const Text('Cancel'),
                      ),
                      TextButton(
                        onPressed: () => setState(() {
                          Navigator.pop(context, 'Cancel'); 
                          containerList.add(const RequestBox());
                        },), child: const Text('Confirm'),
                      )
                    ],
                  ),
                ),
                child: Container(
                  width: 500.0,
                  height: 50.0,
                  padding: const EdgeInsets.all(10.0),
                  decoration: BoxDecoration(
                    color: red,
                    borderRadius: BorderRadius.circular(16.0),
                  ),
                  child: const Column(
                    children: [
                      Text("New Request",style: bold),
                    ]
                  ),
                )
              )
            ),
          ),
        ],
      ),    
    );
  }
}