import 'package:flutter/material.dart';
import './intro.dart';
import './navigator.dart';
import './request.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FoodTraffic',
      theme: ThemeData(
        //useMaterial3: true,      
      ),
      home: Scaffold(
        body: Container(
          padding: const EdgeInsets.only(
            bottom: 30,
            top: 40,
            left: 20,
            right: 20
          ),
          child: const Column(
            children: [
              IntroBox(),
              RoleSelection(),
              Request(),
            ],
          ),
        ),
      ),
    );
  }
}