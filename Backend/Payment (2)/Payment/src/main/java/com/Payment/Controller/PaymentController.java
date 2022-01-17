package com.Payment.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.Payment.Model.PaymentPOJO;
import com.Payment.Model.Reservation;
import com.Payment.Service.PaymentService;

@RestController
@CrossOrigin(origins = "*")
public class PaymentController {
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	public PaymentService paymentService;
	
	@PostMapping("/payment")
	public PaymentPOJO doPayment(@RequestBody PaymentPOJO payment) {
		int rId = payment.getrId();
		System.out.println(rId);
		Reservation order =  restTemplate.exchange("http://localhost:8083/reservation/get/"+ rId,HttpMethod.GET,null,Reservation.class).getBody(); 
		return paymentService.doPay(payment,order);
		
	}

}
//@PostMapping("/Add")
//public Reservation add(@RequestBody Reservation order)
//{
//	int trainNo = order.getTrainNo();
//	System.out.println(trainNo);
//	TrainAvailability train = restTemplate.exchange("http://localhost:8082/train/findtrainById/"+ trainNo,HttpMethod.GET,null,TrainAvailability.class).getBody();
//	return service.add(order,train);
//}