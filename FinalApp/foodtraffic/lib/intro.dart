import 'package:flutter/material.dart';

class IntroBox extends StatelessWidget {const IntroBox({super.key});
  @override
  Widget build(BuildContext context) {    

    return const SizedBox(
      height: 80.0,
      width: 300,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start,
        children: [          
          Image(
            image: AssetImage('Image/foodTraffic_small.png'),
            height: 50,
            width: 100,
          ),
          Text(
            "I want to be...",
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w900,
            ),
          ),
        ],
      ),    
    );
  }
}