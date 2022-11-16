package com.idfc.bankApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idfc.bankApp.model.Customer;
import com.idfc.bankApp.model.Transactions;
import com.idfc.bankApp.repository.Customer_Repo;
import com.idfc.bankApp.repository.Transactions_Repo;

@Service
public class Transactions_Service {
	
	Customer customer = new Customer();
	Transactions transaction = new Transactions();

	@Autowired
	private Transactions_Repo tran_repo;
	
	@Autowired
	private Customer_Repo cust_repo;
	
	public String viewBalance(int id) {
		return "Your account balance is Rs. " + cust_repo.findById(id).get().getBalance();
	}
	
	public String Deposit(int accNo, double amount) {
		transaction.setAcc_no(accNo);
		transaction.setAmount(amount);
		transaction.setType("Deposit");
		tran_repo.save(transaction);
		customer = cust_repo.findById(accNo).get();
		customer.setBalance(customer.getBalance() + amount);
		cust_repo.save(customer);
		return "Rs. " + amount +" has been successfully deposited.";
	}
	
	public String Withdraw(int accNo, double amount) {
		if(cust_repo.findById(accNo).get().getBalance() > amount) {
			transaction.setAcc_no(accNo);
			transaction.setAmount(amount);
			transaction.setType("Withdraw");
			tran_repo.save(transaction);
			customer = cust_repo.findById(accNo).get();
			customer.setBalance(customer.getBalance() - amount);
			cust_repo.save(customer);
			return "Rs. " + amount +" has been successfully withdrawn.";
		}else {
			return "Insufficient Balance !!";
		}	
	}
	
	public String Transfer(int accNo, double amount, int receiver,String ifsc) {
		if(cust_repo.findById(accNo).get().getBalance() > amount) {
			if(cust_repo.findById(receiver).get().getIfsc().equals(ifsc)){
				
			
			if(cust_repo.existsById(receiver)) {
				transaction.setAcc_no(accNo);
				transaction.setAmount(amount);
				transaction.setReceiverAcc_no(receiver);
				transaction.setType("Transfer");
				tran_repo.save(transaction);
				customer = cust_repo.findById(accNo).get();
				customer.setBalance(customer.getBalance() - amount);
				cust_repo.save(customer);
				customer = cust_repo.findById(receiver).get();
				customer.setBalance(customer.getBalance() + amount);
				cust_repo.save(customer);
				return "Rs. " + amount +" has been successfully transferred.";
			}else {
				return "Receiver Account doesnt exist !!";
			}
		}else {
			return "IFSC is wrong";
			}
		}return "Insufficient Balance";
		
	}
	
	public List<Transactions> history(int accNo) {
		return tran_repo.findAll().stream()
				.filter(ab -> ((ab.getAcc_no() == accNo) || (ab.getReceiverAcc_no() == accNo))).toList();
	}
	
}
