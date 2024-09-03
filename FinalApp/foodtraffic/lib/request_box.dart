import 'package:flutter/material.dart';
import 'api_service.dart';

class RequestBox extends StatelessWidget {
  const RequestBox({super.key});

  @override
  Widget build(BuildContext context) {
    const TextStyle bold = TextStyle(fontSize: 16, fontWeight: FontWeight.w900);

    return Container(
      width: 250.0,
      height: 120.0,
      padding: const EdgeInsets.all(10.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16.0),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                "Meal Request",
                style: bold,
                textAlign: TextAlign.center,
              ),
              SizedBox(width: 35),
              MealStatus(),
            ],
          ),
          SizedBox(height: 5),
          Text("3rd September 2024\n12:15 pm @ Tampines\n1x Halal (Diabetes)"),
        ],
      ),
    );
  }
}

class MealStatus extends StatefulWidget {
  const MealStatus({super.key});

  @override
  _MealStatusState createState() => _MealStatusState();
}

class _MealStatusState extends State<MealStatus> {
  Text txt = const Text(
    "Pending...",
    style: TextStyle(
        fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xAA329FB3)),
    textAlign: TextAlign.center,
  );
  Text matchtxt = const Text(
    "Matched!",
    style: TextStyle(
        fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xAAC63F43)),
    textAlign: TextAlign.center,
  );
  Text confirmtxt = const Text(
    "Confirm!",
    style: TextStyle(
        fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xAAC63F43)),
    textAlign: TextAlign.center,
  );
  int state = 0;
  late Future<List<dynamic>> data;

  @override
    void initState() {
    super.initState();
    data = ApiService().fetchData();
    print(data);
  }

  @override
  Widget build(BuildContext context) {
    const Color gray = Color(0xAAD9D9D9);
    const TextStyle bold = TextStyle(
      fontSize: 20,
      fontWeight: FontWeight.w900,
    );

    return GestureDetector(
      child: txt,
      onTap: () {
        setState(() {
          if (state == 0) {
            txt = matchtxt;
            state++;
          } else if (state == 1) {
            showDialog<String>(
              context: context,
              builder: (BuildContext context) => AlertDialog(
                title: const Text('Match Found:', style: bold),
                content: SizedBox(
                  height: 300.0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Text(
                            'Location:',
                            style: TextStyle(
                              fontSize: 16,
                            ),
                          ),
                          const SizedBox(width: 10),
                          Container(
                            width: 153.0,
                            height: 40.0,
                            padding: const EdgeInsets.all(10.0),
                            decoration: BoxDecoration(
                              color: gray,
                              borderRadius: BorderRadius.circular(16.0),
                            ),
                            child: const Text("Temasek Polytechnic",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w900,
                                )),
                          )
                        ],
                      ),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          const Text(
                            'Expiry:',
                            style: TextStyle(
                              fontSize: 16,
                            ),
                          ),
                          const SizedBox(width: 30),
                          Container(
                            width: 153.0,
                            height: 40.0,
                            padding: const EdgeInsets.all(10.0),
                            decoration: BoxDecoration(
                              color: gray,
                              borderRadius: BorderRadius.circular(16.0),
                            ),
                            child: const Text("Today, 2:30 pm",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w900,
                                )),
                          )
                        ],
                      ),
                      const SizedBox(height: 10),
                      const Text(
                        'Meal Description:',
                        style: TextStyle(
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 10),
                      Container(
                        width: 300.0,
                        height: 75.0,
                        padding: const EdgeInsets.all(10.0),
                        decoration: BoxDecoration(
                          color: gray,
                          borderRadius: BorderRadius.circular(16.0),
                        ),
                        child: const Text("Grilled chicken, Steamed broccoli",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w900,
                            )),
                      ),
                      const SizedBox(height: 10),
                      const Text(
                        'Tags:',
                        style: TextStyle(
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          Container(
                            width: 50.0,
                            height: 40.0,
                            padding: const EdgeInsets.all(10.0),
                            decoration: BoxDecoration(
                              color: gray,
                              borderRadius: BorderRadius.circular(16.0),
                            ),
                            child: const Text("Halal",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w900,
                                )),
                          ),
                          const SizedBox(width: 10),
                          Container(
                            width: 75.0,
                            height: 40.0,
                            padding: const EdgeInsets.all(10.0),
                            decoration: BoxDecoration(
                              color: gray,
                              borderRadius: BorderRadius.circular(16.0),
                            ),
                            child: const Text("Healthy",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w900,
                                )),
                          )
                        ],
                      ),
                    ],
                  ),
                ),
                actions: <Widget>[
                  TextButton(
                    onPressed: () => Navigator.pop(context, 'Cancel'),
                    child: const Text('Cancel'),
                  ),
                  TextButton(
                    onPressed: () => setState(
                      () {
                        state++;
                        Navigator.pop(context, 'Confirm');
                      },
                    ),
                    child: const Text('Confirm'),
                  )
                ],
              ),
            );
          } else if (state == 2) {
            txt = confirmtxt;
          }
        });
      },
    );
  }
}
