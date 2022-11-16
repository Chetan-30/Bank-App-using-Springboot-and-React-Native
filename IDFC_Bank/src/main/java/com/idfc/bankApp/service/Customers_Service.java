package com.idfc.bankApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idfc.bankApp.model.Customer;
import com.idfc.bankApp.repository.Customer_Repo;

@Service
public class Customers_Service {

	@Autowired
	private Customer_Repo cust_repo;
	
	public String addCustomer(Customer customer) {
		if(!cust_repo.existsById(customer.getAcc_no())) {
			cust_repo.save(customer);
			return "Account Created Sucessfully !!";
		}else {
			return "Account already exists !!";
		}
	}
	
	public String updatePass(int accNo, String email, String password) {
		if(cust_repo.existsById(accNo)) {
			if(cust_repo.findById(accNo).get().getEmail().equals(email)) {
				Customer c = cust_repo.findById(accNo).get();
				c.setPassword(password);
				cust_repo.save(c);
				return "Password updated Sucessfully !!";
			}else {
				return "Wrong Email id";
			}
		}else {
			return "Account does not exists !!";
		}
	}
	
	public Customer getCustomer(int id) {
		if(cust_repo.existsById(id)==true) {
			return cust_repo.findById(id).get();
		}
		return null;
	}
	
	public List<Customer> getCustomer() {
		return cust_repo.findAll();
	}
	
	public String updateCustomer(Customer customer) {
		if(cust_repo.existsById(customer.getAcc_no())) {
			Customer c = cust_repo.findById(customer.getAcc_no()).get();
			if(customer.getName() != null && customer.getName() != "") {
				c.setName(customer.getName());
			}
			if(customer.getEmail() != null && customer.getEmail() != "") {
				c.setEmail(customer.getEmail());
			}
			
			if(customer.getIfsc() != null && customer.getIfsc() != "") {
				c.setIfsc(customer.getIfsc());
			}
			cust_repo.save(c);
			return "Account Updated Sucessfully !!";
		}else {
			return "Account does not exists !!";
		}
	}
	
	public String deleteCustomer(int id) {
		if(cust_repo.existsById(id)) {
			cust_repo.deleteById(id);
			return "Account Deleted Sucessfully !!";
		}else {
			return "Account does not exists !!";
		}
	}
}
