global class createOpportunity implements Schedulable{
    global void execute(schedulablecontext con){
	Opportunity opp = new Opportunity();
    opp.CloseDate=date.today();
	opp.Name='test opp123';
	opp.StageName='IsWon';
	insert opp;
    }
}